import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { IoMenu } from "react-icons/io5";
import { FiSettings, FiHome, FiPieChart, FiFileText } from "react-icons/fi";
import { ModeToggle } from "./mode-toggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="p-4 flex items-center justify-between">
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-xl">
              <IoMenu />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="w-[250px]">
            <SheetHeader>
              <SheetTitle className="text-left text-lg">
                {t('navbar.navigation')}
              </SheetTitle>
            </SheetHeader>

            <div className="mt-6 flex flex-col space-y-2">
              <Button variant="ghost" className="justify-start">
                <FiHome className="mr-2" /> {t('navbar.home')}
              </Button>
              <Button variant="ghost" className="justify-start">
                <FiPieChart className="mr-2" /> {t('navbar.analytics')}
              </Button>
              <Button variant="ghost" className="justify-start">
                <FiFileText className="mr-2" /> {t('navbar.reports')}
              </Button>
              <Button variant="ghost" className="justify-start">
                <FiSettings className="mr-2" /> {t('navbar.settings')}
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden lg:flex gap-4">
        <Button variant="ghost" className="flex items-center">
          <FiHome className="mr-2" /> {t('navbar.home')}
        </Button>
        <Button variant="ghost" className="flex items-center">
          <FiPieChart className="mr-2" /> {t('navbar.analytics')}
        </Button>
        <Button variant="ghost" className="flex items-center">
          <FiFileText className="mr-2" /> {t('navbar.reports')}
        </Button>
        <Button variant="ghost" className="flex items-center">
          <FiSettings className="mr-2" /> {t('navbar.settings')}
        </Button>
        <ModeToggle />
        <LanguageSwitcher />
      </div>
    </nav>
  );
}

