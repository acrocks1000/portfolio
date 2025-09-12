import { FaFeather } from "react-icons/fa";
import ShinyText from "../ShinyText/shinyText";
import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";

export function Navbar({ username }: { username: string }) {
    const [open, setOpen] = useState(false);

    return (
      <div className="navbar relative z-10">
        {open && (
          <div
            className="fixed inset-0 bg-black/60 z-0"
            onClick={() => setOpen(false)}
          />
        )}
        <div
          className={`rounded-2xl m-auto items-center flex flex-col w-3/5 my-2 md:my-5 p-5 justify-between bg-white/20 backdrop-blur transition-all duration-300 overflow-hidden relative z-10
                                        ${
                                          open
                                            ? "h-full md:h-48 border-4"
                                            : "h-16 border"
                                        }
                                `}
          style={
            open
              ? {
                  borderImage:
                    "linear-gradient(90deg, #40ffaa, #4079ff, #40ffaa, #4079ff, #40ffaa) 1",
                  borderStyle: "solid",
                }
              : { borderColor: "#e5e7eb", borderStyle: "solid" }
          }
          onDoubleClick={() => setOpen((prev) => !prev)}
        >
          <div className="flex w-full items-center justify-between mb-2">
            <div className="flex gap-2 items-center">
              <FaFeather />
              <ShinyText
                text={username}
                disabled={false}
                speed={3}
                className="text-xl tracking-widest font-semibold uppercase text-gray-800"
              />
            </div>
            <div className="menu-btn text-xl cursor-pointer flex-1 flex justify-end">
              <div
                onClick={() => setOpen((prev) => !prev)}
                className="flex items-center"
              >
                {open ? <IoClose /> : <IoMenu />}
              </div>
            </div>
          </div>

          {open && (
            <div className="text-black w-full flex flex-col justify-between items-center mt-4">
              <hr className="w-full border-t border-gray-200 mb-4" />
              <div
                className="flex gap-4 w-full px-auto flex-wrap
                                        md:flex-row
                                        flex-col
                                "
              >
                {["Projects", "Blogs", "Contact Me", "About Me"].map(
                  (text, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-100 rounded shadow p-6 h-8 flex items-center justify-center flex-1 w-full md:w-auto transition-colors duration-200 hover:bg-gray-900 hover:text-white cursor-pointer"
                    >
                      {text}
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
}
