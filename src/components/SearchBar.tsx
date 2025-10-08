"use client";
import { useState } from "react";
import { Input } from "./ui/input";
import React from "react";
import { Search, X } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

export default function SearchBar() {
  const [value, setValue] = useState("");
  const pathname = usePathname()
  const router = useRouter()

  // Fonction de recherche: création du paramettre de recherche et rearangement de l'url
  const handleSearch = () => {
    const params = new URLSearchParams()
    if(value){
      params.set('title', value)
    } else {
      params.delete('query')
    }
    router.push(`${pathname}?${params}`)
  }

  const handleResetSearch = () => {
    setValue('');
    router.push(pathname)
  }
  return (
    <div className="flex flex-col md:flex-row justify-center mt-4 gap-2">
      <div className="relative w-full sm:w-72 md:w-96">
        <Search className="absolute left-3 top-1/2 w-4 h-4 -translate-y-1/2 " />
        <Input
          type="search"
          placeholder="Rechercher un article..."
          onChange={(e) => setValue(e.target.value)}
          className="pl-9 "
        />
      </div>
      <div className="flex gap-1">
        <Button 
          className={clsx("w-1/2", !value && "w-full")}
          onClick={handleSearch}>Rechercher</Button>
        <AnimatePresence >
          {value && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="flex items-center w-1/2"
            >
              <Button
                className=" flex items-center gap-1 w-full"
                onClick={handleResetSearch}
              >
                <X className="w-4 h-4"/>
                <span>Reset</span>
              </Button>
            </motion.div>
            )
          }
        </AnimatePresence>
      </div>
    </div>
  );
}
