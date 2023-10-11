import Popover from "./components/popover";
import classNames from "classnames";

function App() {
  return (
    <div className="h-screen w-full flex justify-center">
      <div className="pt-20">
        <Popover as="section" className="relative">
          <Popover.Button
            as="button"
            className={({ show }) =>
              classNames(
                "px-3 py-2 rounded-md bg-slate-800 select-none text-slate-300 will-change-transform font-semibold text-xl section-none outline-none transition duration-300 shadow-[-3px_3px_5px_rgba(0,0,0,.2)]  hover:shadow-[-10px_10px_10px_rgba(0,0,0,.3)] hover:translate-x-1 hover:-translate-y-1",
                {
                  "!bg-slate-300 !text-slate-800": show,
                }
              )
            }
          >
            {({ show }) => <span>{show ? "Hide" : "Show"}</span>}
          </Popover.Button>

          <Popover.Panel
            as="div"
            className={({ show }) =>
              classNames(
                "absolute top-[130%] left-1/2 -translate-x-1/2 min-w-[650px] rounded-md px-5 py-4 bg-slate-800 text-slate-400 grid gap-2 shadow-[-6px_6px_7px_rgba(0,0,0,.4)]",
                { "panel-enter-active": show }
              )
            }
          >
            <div>
              <h1 className="text-4xl font-bold text-slate-100">
                Lorem, ipsum dolor.
              </h1>
              <span className="text-[20px] font-medium text-slate-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
            <p className="font-medium text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              mollitia velit hic totam, dignissimos odit beatae, sint soluta
              nulla provident aut saepe corporis? Omnis est, dolore odio
              repudiandae voluptate sed!
            </p>
          </Popover.Panel>
        </Popover>
      </div>
    </div>
  );
}

export default App;
