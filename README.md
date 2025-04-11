# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and
some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
  uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)
  uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript
and enable type-aware lint rules. Check out the
[TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)
to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io)
in your project.

## Redux Flags Overview

| Flag           | Used in                 | Purpose                               | Becomes `true` when...                  |
| -------------- | ----------------------- | ------------------------------------- | --------------------------------------- |
| `isRefreshing` | `authSlice`, `App.jsx`  | Blocks rendering during token check   | `refreshUser.pending`                   |
| `isLoggedIn`   | `authSlice`, everywhere | Shows private routes like `/contacts` | `logIn` or `refreshUser` fulfilled      |
| `hasFetched`   | `contactsSlice`, page   | Delays "no contacts" message          | `fetchContacts` done (ok or error)      |
| `isLoading`    | `contactsSlice`         | Indicates add/delete in progress      | `addContact` or `deleteContact.pending` |
