import style from "./layout.module.css";

export default function Layout({ children }) {
  return <div className={style.container}>{children}</div>;
}