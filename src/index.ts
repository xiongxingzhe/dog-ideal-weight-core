export type WeightRange = { minKg: number; maxKg: number }

export function compareToIdealKg(currentKg: number, range: WeightRange): "below" | "within" | "above" {
  if (!Number.isFinite(currentKg) || currentKg <= 0) throw new Error("currentKg must be > 0")
  if (currentKg < range.minKg) return "below"
  if (currentKg > range.maxKg) return "above"
  return "within"
}