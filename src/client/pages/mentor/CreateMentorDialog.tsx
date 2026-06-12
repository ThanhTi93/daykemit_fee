import { useEffect } from "react";

import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    MenuItem,
    TextField,
    Typography,
} from "@mui/material";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { mentorSchema } from "../../../features/mentors/mentors.schema";
import { useCreateMentorMutation } from "../../../features/mentors/mentors.rtk";

import type { MentorFormValues } from "../../../features/mentors/mentors.schema";
import { useAppSelector } from "../../../store/hooks";

interface CreateMentorDialogProps {
    open: boolean;
    onClose: () => void;
}

const defaultValues: MentorFormValues = {
    description: "",
    experienceYears: 0,
    socialLinks: "",
    accountId: undefined as unknown as number,
    categoryIds: [],
    cv: undefined as unknown as File,
};

export default function CreateMentorDialog({
    open,
    onClose,
}: CreateMentorDialogProps) {
    const [createMentor, { isLoading }] = useCreateMentorMutation();
    const { items: categories } = useAppSelector((state) => state.categories);
    const { user } = useAppSelector((state) => state.auth);

    const {
        control,
        handleSubmit,
        reset,
        setValue,
        watch,
        formState: { errors },
    } = useForm<MentorFormValues>({
        resolver: yupResolver(mentorSchema),
        defaultValues,
    });

    const selectedCv = watch("cv");

    useEffect(() => {
        if (user?.id) {
            setValue("accountId", user.id, {
                shouldValidate: true,
                shouldDirty: true,
            });
        }
    }, [user?.id, setValue]);

    const handleClose = () => {
        reset({
            ...defaultValues,
            accountId: user?.id as number,
        });

        onClose();
    };

    const onSubmit = async (data: MentorFormValues) => {
        if (!user?.id) {
            console.log("Không tìm thấy user đang đăng nhập");
            return;
        }

        try {
            await createMentor({
                description: data.description,
                experienceYears: Number(data.experienceYears),
                socialLinks: data.socialLinks || "",
                accountId: data.accountId,
                categoryIds: data.categoryIds,
                cv: data.cv,
            }).unwrap();

            reset({
                ...defaultValues,
                accountId: user.id,
            });

            onClose();
        } catch (error) {
            console.log("Thêm mentor thất bại:", error);
        }
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="sm"
            fullWidth
        >
            <DialogTitle>
                <Typography variant="h6" fontWeight={700}>
                    Đăng Ký Làm Mentor
                </Typography>
            </DialogTitle>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <DialogContent>
                    <Box display="flex" flexDirection="column" gap={2}>
                        {/* Description */}
                        <Controller
                            name="description"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    multiline
                                    minRows={3}
                                    label="Mô tả mentor"
                                    placeholder="Nhập mô tả kinh nghiệm, chuyên môn..."
                                    error={!!errors.description}
                                    helperText={errors.description?.message}
                                />
                            )}
                        />

                        {/* Experience Years */}
                        <Controller
                            name="experienceYears"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    type="number"
                                    label="Số năm kinh nghiệm"
                                    error={!!errors.experienceYears}
                                    helperText={errors.experienceYears?.message}
                                    onChange={(e) => {
                                        field.onChange(Number(e.target.value));
                                    }}
                                />
                            )}
                        />

                        {/* Social Links */}
                        <Controller
                            name="socialLinks"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    label="Link mạng xã hội"
                                    placeholder="Facebook, LinkedIn, GitHub..."
                                    error={!!errors.socialLinks}
                                    helperText={errors.socialLinks?.message}
                                />
                            )}
                        />

                        {/* Categories */}
                        <Controller
                            name="categoryIds"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    select
                                    fullWidth
                                    label="Skill"
                                    value={field.value || []}
                                    SelectProps={{
                                        multiple: true,
                                    }}
                                    error={!!errors.categoryIds}
                                    helperText={errors.categoryIds?.message}
                                    onChange={(e) => {
                                        const value = e.target.value;

                                        const categoryIds =
                                            typeof value === "string"
                                                ? value
                                                      .split(",")
                                                      .map(Number)
                                                : (value as number[]);

                                        field.onChange(categoryIds);
                                    }}
                                >
                                    {categories.map((cat) => (
                                        <MenuItem key={cat.id} value={cat.id}>
                                            {cat.name}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            )}
                        />
                        {/* CV File */}
                        <Box>
                            <Button
                                variant="outlined"
                                component="label"
                                fullWidth
                                color={errors.cv ? "error" : "primary"}
                            >
                                Chọn file CV
                                <input
                                    hidden
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];

                                        if (!file) return;

                                        setValue("cv", file, {
                                            shouldValidate: true,
                                            shouldDirty: true,
                                        });
                                    }}
                                />
                            </Button>
                            {selectedCv && (
                                <Box
                                    mt={1}
                                    px={1.5}
                                    py={1}
                                    border="1px solid"
                                    borderColor="divider"
                                    borderRadius={1}
                                    bgcolor="grey.50"
                                >
                                    <Typography
                                        variant="body2"
                                        fontWeight={600}
                                    >
                                        Đã chọn file:
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            wordBreak: "break-all",
                                        }}
                                    >
                                        {selectedCv.name}
                                    </Typography>
                                </Box>
                            )}

                            {errors.cv?.message && (
                                <Typography
                                    variant="caption"
                                    color="error"
                                    mt={0.5}
                                    display="block"
                                >
                                    {errors.cv.message}
                                </Typography>
                            )}
                        </Box>
                        {!user?.id && (
                            <Typography variant="caption" color="error">
                                Không tìm thấy tài khoản đang đăng nhập.
                            </Typography>
                        )}
                    </Box>
                </DialogContent>
                <DialogActions sx={{ px: 3, pb: 2 }}>
                    <Button onClick={handleClose} color="inherit">
                        Hủy
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        disabled={isLoading || !user?.id}
                    >
                        {isLoading ? "Đang thêm..." : "Đăng Ký"}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}