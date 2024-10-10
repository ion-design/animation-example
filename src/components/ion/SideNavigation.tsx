// Generated with Ion on 10/10/2024, 7:45:40 AM
// Figma Link: https://www.figma.com/design/GzGS1XBtO8fnXGsjKDPiIf?node-id=forced_ion/SideNavigation/default_8:2062
import {
  Bank,
  Gear,
  GridFour,
  SlidersHorizontal,
  UsersFour,
} from "@phosphor-icons/react/dist/ssr";

import Badge from "@/components/ion/Badge";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ion/Navigation";

import Sidebar from "./Sidebar";

function SideNavigation() {
  return (
    <Sidebar>
      <div className="flex-1 h-full w-[244px] flex flex-col gap-1 px-3">
        <div className="w-full flex items-start px-3 py-6">
          <img
            src="/images/example-page/Logo-I8-2062;487-8586;2-9653.svg"
            alt="Logo"
            className="h-7 w-7"
          />
        </div>
        <NavigationMenu>
          <NavigationMenuList className="flex-1 h-full w-full flex flex-col gap-2">
            {[
              {
                children: "Dashboard",
                extra: (
                  <Badge type="number" variant="soft" color="pink" size="sm">
                    2
                  </Badge>
                ),
                iconLeading: <GridFour size={14} weight={"fill"} />,
                href: "/",
              },
              {
                children: "Banking",
                iconLeading: <Bank size={14} weight={"fill"} />,
                href: "/banking",
              },
              {
                children: "Employees",
                iconLeading: <UsersFour size={14} weight={"fill"} />,
                href: "/employees",
              },
              {
                children: "Integrations",
                iconLeading: <SlidersHorizontal size={14} weight={"fill"} />,
                href: "/integrations",
              },
              {
                children: "Settings",
                iconLeading: <Gear size={14} weight={"fill"} />,
                href: "/settings",
              },
            ].map(({ children, extra, iconLeading, href }, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  className="w-full cursor-pointer"
                  extra={extra}
                  iconLeading={iconLeading}
                  href={href}
                >
                  {children}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </Sidebar>
  );
}
export default SideNavigation;
