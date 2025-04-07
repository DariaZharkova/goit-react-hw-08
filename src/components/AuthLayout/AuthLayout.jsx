import css from './AuthLayout.module.css';

export default function AuthLayout({
  image,
  alt,
  title,
  children,
  bottomText,
}) {
  return (
    <main className={css.main}>
      <div className={css.imageWrap}>
        <img src={image} alt={alt} />
      </div>

      <div className={css.content}>
        <h1 className={css.title}>{title}</h1>
        {children}
        <p className={css.text}>{bottomText}</p>
      </div>
    </main>
  );
}
