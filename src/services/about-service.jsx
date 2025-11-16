import supabase from "../supabase-client";

export async function getExperiences() {
  const { data, error } = await supabase.from("experiences").select("*");
  if (error) {
    console.log("error fetchin:g ", error);
  } else {
    return data;
  }
}

export function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
