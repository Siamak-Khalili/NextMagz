"use client";
import { Controller, useForm } from "react-hook-form";
import RHFTextField from "@/ui/RHFTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@/ui/Button";
import RHFSelect from "@/ui/RHFSelect";
import * as yup from "yup";
import useCategories from "@/hook/useCategory";
import useTags from "@/hook/useTags";
import TextField from "@/ui/TextField";
import { useEffect, useState } from "react";
import Image from "next/image";
import ButtonIcon from "@/ui/ButtonIcon";
import { XMarkIcon, CheckIcon } from "@heroicons/react/24/outline";
import useCreatePost from "./useCreatePost";
import useEditPost from "./useEditPost";
import { useRouter } from "next/navigation";
import { imageUrlToFile } from "@/utils/fileFormatter";
import Loading from "@/ui/Loading";

const schema = yup
  .object({
    title: yup
      .string()
      .min(5, "حداقل ۵ کاراکتر را وارد کنید")
      .required("عنوان ضروری است"),
    briefText: yup
      .string()
      .min(5, "حداقل ۱۰ کاراکتر را وارد کنید")
      .required("توضیحات ضروری است"),
    text: yup
      .string()
      .min(5, "حداقل ۱۰ کاراکتر را وارد کنید")
      .required("توضیحات ضروری است"),
    slug: yup.string().required("اسلاگ ضروری است"),
    readingTime: yup
      .number()
      .positive()
      .integer()
      .required("زمان مطالعه ضروری است")
      .typeError("یک عدد را وارد کنید"),
    category: yup.string().required("دسته بندی ضروری است"),
    tags: yup
      .array()
      .of(yup.string())
      .min(1, "حداقل یک تگ اضافه کنید")
      .required("تگ‌ها ضروری هستند"),
  })
  .required();

function CreatePostForm({ postToEdit = {} }) {
  const { _id: editId } = postToEdit;
  const isEditSession = Boolean(editId);
  const {
    title,
    text,
    briefText,
    slug,
    readingTime,
    category,
    coverImage,
    coverImageUrl: prevPostCoverImageUrl,
    tags: postTags,
  } = postToEdit;
  let editValues = {};
  if (isEditSession) {
    editValues = {
      title,
      text,
      briefText,
      slug,
      readingTime,
      category: category._id,
      coverImage,
      tags: postTags || [],
    };
  }
  const { categories } = useCategories();
  const { tags: allTags } = useTags();
  const { createPost, isCreating } = useCreatePost();
  const { editPost, isEditing } = useEditPost();
  const [coverImageUrl, setCoverImageUrl] = useState(
    prevPostCoverImageUrl || null
  );
  const [selectedTags, setSelectedTags] = useState(postTags || []);
  const [tagInput, setTagInput] = useState("");
  const router = useRouter();

  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
    reset,
    control,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: editValues,
  });

  const watchedTags = watch("tags", []);

  useEffect(() => {
    if (prevPostCoverImageUrl) {
      async function fetchMyAPI() {
        const file = await imageUrlToFile(prevPostCoverImageUrl);
        setValue("coverImage", file);
      }
      fetchMyAPI();
    }
  }, []);

  useEffect(() => {
    if (postTags) {
      setValue("tags", postTags);
      setSelectedTags(postTags);
    }
  }, [postTags]);

  const addTag = (tag) => {
    const newTags = watchedTags.includes(tag)
      ? watchedTags.filter((t) => t !== tag)
      : [...watchedTags, tag];
    setValue("tags", newTags);
    setSelectedTags(newTags);
  };

  const removeTag = (index) => {
    const newTags = watchedTags.filter((_, i) => i !== index);
    setValue("tags", newTags);
    setSelectedTags(newTags);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      const newTag = tagInput.trim();
      if (!watchedTags.includes(newTag)) {
        const newTags = [...watchedTags, newTag];
        setValue("tags", newTags);
        setSelectedTags(newTags);
      }
      setTagInput("");
    }
  };

  const searchResults = allTags
    .map((tag) => tag.name)
    .filter((tag) =>
      tagInput ? tag.toLowerCase().includes(tagInput.toLowerCase()) : true
    );

  const onSubmit = async (data) => {
    const formData = new FormData();

    for (const key in data) {
      if (key === "tags") {
        data.tags.forEach((tag) => {
          formData.append("tags", tag);
        });
      } else {
        formData.append(key, data[key]);
      }
    }

    if (isEditSession) {
      editPost(
        { id: editId, data: formData },
        {
          onSuccess: () => {
            reset();
            router.push("/profile/posts");
          },
        }
      );
    } else {
      createPost(formData, {
        onSuccess: () => {
          router.push("/profile/posts");

          reset();
        },
      });
    }
  };

  return (
    <form className="form w-full" onSubmit={handleSubmit(onSubmit)}>
      <RHFTextField
        label="عنوان"
        name="title"
        register={register}
        isRequired
        errors={errors}
      />
      <RHFTextField
        label="متن کوتاه"
        name="briefText"
        register={register}
        isRequired
        errors={errors}
      />
      <RHFTextField
        label="متن"
        name="text"
        register={register}
        isRequired
        errors={errors}
      />
      <RHFTextField
        label="اسلاگ"
        name="slug"
        register={register}
        isRequired
        errors={errors}
      />
      <RHFTextField
        label="زمان مطالعه"
        name="readingTime"
        register={register}
        isRequired
        errors={errors}
      />
      <RHFSelect
        label="دسته بندی"
        isRequired
        name="category"
        register={register}
        options={categories}
      />
      <Controller
        control={control}
        name="coverImage"
        rules={{ required: "عکس کاور پست الزامی است" }}
        render={({ field: { value, onChange, ...field } }) => {
          return (
            <TextField
              {...field}
              value={value?.fileName}
              onChange={(event) => {
                const file = event.target.files[0];
                onChange(file);
                setCoverImageUrl(URL.createObjectURL(file));
                event.target.value = null;
              }}
              label="کاور پست"
              type="file"
              id="coverImage"
            />
          );
        }}
      />

      {coverImageUrl && (
        <div className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
          <Image
            className="object-cover object-center"
            fill
            alt="cover-iamge"
            src={coverImageUrl}
          />
          <ButtonIcon
            type="button"
            onClick={() => {
              setCoverImageUrl(null);
              setValue("coverImage", null);
            }}
            variant="red"
            className="w-6 h-6 absolute !left-0"
          >
            <XMarkIcon />
          </ButtonIcon>
        </div>
      )}

      <div className="space-y-4">
        <label className="block text-sm font-medium text-neutral-900 dark:text-neutral-100">
          تگ‌ها
          <span className="text-red-500 mr-1">*</span>
        </label>

        {watchedTags.length > 0 && (
          <div className="flex flex-wrap gap-2 p-3 rounded-lg bg-primary-50 dark:bg-primary-950/30 border border-primary-200 dark:border-primary-800">
            {watchedTags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium bg-primary-600 dark:bg-primary-700 text-white shadow-sm hover:shadow-md transition-shadow"
              >
                <CheckIcon className="w-4 h-4" />
                {tag}
                <button
                  type="button"
                  onClick={() => removeTag(index)}
                  className="hover:opacity-75 transition-opacity ml-1"
                >
                  <XMarkIcon className="w-4 h-4" />
                </button>
              </span>
            ))}
          </div>
        )}

        <input
          type="text"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="جستجو یا تگ جدید بنویسید..."
          className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white placeholder:text-neutral-500 dark:placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all text-sm"
        />

        <div className="h-48 overflow-y-auto rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 p-3">
          {searchResults.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {searchResults.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => addTag(tag)}
                  className="group px-3 py-2.5 rounded-lg border-2 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:border-primary-500 dark:hover:border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-950/30 transition-all flex items-center justify-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  <div className="w-5 h-5 rounded border-2 border-neutral-300 dark:border-neutral-700 group-hover:border-primary-500 dark:group-hover:border-primary-400 flex items-center justify-center transition-colors">
                    {watchedTags.includes(tag) && (
                      <CheckIcon className="w-3.5 h-3.5 text-primary-600 dark:text-primary-400" />
                    )}
                  </div>
                  <span className="truncate">#{tag}</span>
                </button>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {tagInput.trim() ? "تگی پیدا نشد" : "هنوز تگی انتخاب نشده"}
              </p>
            </div>
          )}
        </div>

        <p className="text-xs text-neutral-600 dark:text-neutral-400 flex items-center gap-1">
          💡 تگ موجود رو انتخاب کنید یا تگ جدید بنویسید و Enter بزنید
        </p>

        {errors.tags && (
          <p className="text-xs text-red-600 dark:text-red-400 mt-1">
            {errors.tags.message}
          </p>
        )}
      </div>

      <div>
        {isCreating || isEditing ? (
          <Loading />
        ) : (
          <Button variant="primary" type="submit" className="w-full">
            تایید
          </Button>
        )}
      </div>
    </form>
  );
}
export default CreatePostForm;
