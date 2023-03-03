import { a as PUBLIC_END_POINT_GRADE_SCHOOL, b as PUBLIC_END_POINT_JUNIOR_HIGH, c as PUBLIC_END_POINT_SENIOR_HIGH } from "../../../chunks/public.js";
import { e as error } from "../../../chunks/index.js";
async function load({ fetch }) {
  async function getGradeSchool() {
    const res = await fetch(PUBLIC_END_POINT_GRADE_SCHOOL);
    if (!res.ok) {
      throw error(res.status, "Error loading, try refreshing!");
    }
    const { data } = await res.json();
    return { data };
  }
  async function getJuniorHigh() {
    const res = await fetch(PUBLIC_END_POINT_JUNIOR_HIGH);
    if (!res.ok) {
      throw error(res.status, "Error loading, try refreshing!");
    }
    const { data } = await res.json();
    return { data };
  }
  async function getSeniorHigh() {
    const res = await fetch(PUBLIC_END_POINT_SENIOR_HIGH);
    if (!res.ok) {
      throw error(res.status, "Error loading, try refreshing!");
    }
    const { data } = await res.json();
    return { data };
  }
  return {
    gradeSchool: getGradeSchool(),
    juniorHigh: getJuniorHigh(),
    seniorHigh: getSeniorHigh()
  };
}
export {
  load
};
