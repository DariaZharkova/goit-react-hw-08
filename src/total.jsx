<div className={`${css.container} theme-${theme}`}>
  <header className={css.header}>
    <nav className={css.nav}>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildLinkClass} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
    {isLoggedIn ? <UserMenu /> : <AuthNav />}
  </header>

  <main className={css.main}>
    <div className={css.formWrap}>
      <h1 className={css.title}>Let's save a new friend!</h1>
      <Form className={css.form}>
        <div className={css.wrap}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.wrap}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field type="text" name="number" id={numberFieldId} />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </div>
    <div className={css.listWrap}>
      <div className={css.wrapper}>
        <p>Find contacts</p>
        <input
          className={css.input}
          type="text"
          value={value}
          onChange={evt => dispatch(changeFilter(evt.target.value))}
        />
      </div>
      {isLoading && !error && <b>Request in progress...</b>}
      {!isLoading && error && <b>{error}</b>}
      <ul className={css.listScroll}>
        {contacts.map(item => (
          <li key={item.id} className={css.item}>
            <Contact item={item} />
          </li>
        ))}
      </ul>
    </div>
  </main>

  <footer className={css.footer}>
    <p>
      Designed & developed by <strong>Daria Zharkova</strong> &copy; 2025 |{' '}
      <a
        href="https://github.com/DariaZharkova"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
    </p>
  </footer>
</div>;
