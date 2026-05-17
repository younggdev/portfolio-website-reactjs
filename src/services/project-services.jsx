import supabase from "../supabase-client";

export async function getProjects() {
  const { data, error } = await supabase.from("projects").select("*");
  if (error) {
    console.log("error fetchin: ", error);
     return [];
  } else {
     return data || [];
  }
}
