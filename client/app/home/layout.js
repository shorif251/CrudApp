import SubNavbar from "../components/SubNavbar";

export default function layout({children}) {
  return (
    <div>
        <nav className="md:hidden block">
          <SubNavbar />
        </nav>
        <div>
            {children}
        </div>
    </div>
  )
}
