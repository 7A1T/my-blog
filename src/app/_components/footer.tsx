import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";
import { FileUser, GraduationCap } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row justify-between items-center">
          <Link
            href="/assets/blog/pdfs/resume-tait-van-strien.pdf"
            className="hover:underline"
          >
            <div className="flex items-center space-x-2">
              <FileUser className="w-6 h-6" />
              <h3 className="text-lg lg:text-xl font-bold tracking-tighter leading-tight">
                My Resume
              </h3>
            </div>
          </Link>
          <Link
            href="/assets/blog/pdfs/Tait-BSc-Thesis.pdf"
            className="hover:underline"
          >
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-6 h-6" />
              <h3 className="text-lg lg:text-xl font-bold tracking-tighter leading-tight">
                My BSc Thesis
              </h3>
            </div>
          </Link>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
