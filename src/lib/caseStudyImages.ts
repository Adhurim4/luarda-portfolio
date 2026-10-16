import fs from "node:fs";
import path from "node:path";
import { CASE_STUDY_IMAGE_DIR, type CaseStudy } from "@/data/caseStudies";

/**
 * Returns the public URL of a case study cover image, or undefined when the
 * file has not been uploaded yet (the UI then shows a neutral placeholder).
 * Runs at build time on the server.
 */
export function getCaseStudyImageUrl(study: CaseStudy): string | undefined {
  const filePath = path.join(
    process.cwd(),
    "public",
    CASE_STUDY_IMAGE_DIR,
    study.image,
  );
  return fs.existsSync(filePath)
    ? `${CASE_STUDY_IMAGE_DIR}/${study.image}`
    : undefined;
}
