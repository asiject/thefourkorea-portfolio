import { yupResolver } from "@hookform/resolvers/yup"
import { Box, Button, MenuItem, Stack } from "@mui/material"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import ControlledTextField from "../components/ControlledTextField"

// 샘플 폼 스키마 — 원본 훈련 신청 폼을 일반화
const requestFormSchema = yup.object({
  applicantName: yup.string().required("이름을 입력하세요"),
  contactPhone: yup
    .string()
    .matches(/^\d{10,11}$/, "연락처는 숫자 10~11자리로 입력하세요")
    .required("연락처를 입력하세요"),
  expectedCount: yup
    .number()
    .typeError("숫자를 입력하세요")
    .min(1, "1명 이상 입력하세요")
    .required("예상 인원을 입력하세요"),
  preferredDate: yup.string().required("희망 날짜를 입력하세요"),
  category: yup.string().required("카테고리를 선택하세요"),
})

type RequestFormValues = yup.InferType<typeof requestFormSchema>

const defaultValues: RequestFormValues = {
  applicantName: "",
  contactPhone: "",
  expectedCount: 1,
  preferredDate: "",
  category: "",
}

const categoryOptions = [
  { value: "type_a", label: "카테고리 A" },
  { value: "type_b", label: "카테고리 B" },
  { value: "type_c", label: "카테고리 C" },
]

const RequestFormDemo = () => {
  const { control, handleSubmit, reset } = useForm<RequestFormValues>({
    defaultValues,
    resolver: yupResolver(requestFormSchema),
  })

  const handleFormSubmit = (values: RequestFormValues) => {
  // 데모용 — 실제 API 대신 콘솔 출력
    console.log("submit:", values)
    alert("제출 완료 (데모)")
  }

  return (
    <Box component="form" onSubmit={handleSubmit(handleFormSubmit)} sx={{ maxWidth: 480, p: 3 }}>
      <Stack spacing={2}>
        <ControlledTextField control={control} name="applicantName" label="신청자 이름" />
        <ControlledTextField control={control} name="contactPhone" label="연락처" />
        <ControlledTextField control={control} name="expectedCount" label="예상 인원" type="number" />
        <ControlledTextField control={control} name="preferredDate" label="희망 날짜" placeholder="YYYY-MM-DD" />
        <ControlledTextField control={control} name="category" label="카테고리" select>
          {categoryOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </ControlledTextField>
        <Stack direction="row" spacing={1}>
          <Button type="submit" variant="contained">
            제출
          </Button>
          <Button type="button" variant="outlined" onClick={() => reset(defaultValues)}>
            초기화
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}

export default RequestFormDemo
