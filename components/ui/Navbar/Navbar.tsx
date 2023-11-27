import React from "react";
import styles from "./styles.module.css";
import {
  Navbar as NavbarNextUI,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <NavbarNextUI>
        <NavbarBrand>
          <div className={styles.containerLogo}>
            <Link href="/">
              <div className={styles.containerBrand}>
                <Image
                  src="https://www.freepnglogos.com/uploads/pokemon-symbol-logo-png-31.png"
                  alt="logo pokémon"
                  width={30}
                  height={30}
                  className={styles.imageLogo}
                />
                <p className="font-bold text-inherit">Pokemon App</p>
              </div>
            </Link>
          </div>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="/">
              Inicio
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/favoritos">
              Favoritos
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarNextUI>
    </div>
  );
};

export default Navbar;
