import { useTranslations } from "next-intl";
import Link from 'next-intl/link';


export default function Home() {
  const t = useTranslations("Index");
  return ( 
    <div>
      <h1>{t("title")}</h1>;
      <Link href="/" locale="en">
        In English
      </Link>;
      <br />
      <button className="px-5 py-2 bg-black text-white rounded-lg">
        <Link href="/" locale="ua">
          In Ukrainian
        </Link>
      </button>
    </div>
  )
}
