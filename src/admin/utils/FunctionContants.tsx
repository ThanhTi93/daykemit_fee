import dayjs from "dayjs";

/**
 * Format ISO date (UTC) → "YYYY-MM-DD HH:mm:ss.SSSSSS" (local time)
 * Mặc định: giờ Việt Nam (UTC+7)
 */
export function formatDate(isoDate?: string | Date | null): string | null {
  if (!isoDate) return null;

  return dayjs(isoDate)
    .add(7, "hour") // chuyển UTC -> GMT+7 (Việt Nam)
    .format("YYYY-MM-DD HH:mm:ss.SSSSSS");
}
