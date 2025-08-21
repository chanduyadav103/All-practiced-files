## ✅ Basic Level (15 Questions)

---

### 1. **What is NPM?**

- **Definition**: Node Package Manager used to install, share, and manage JavaScript packages.

---

### 2. **How do you initialize a project with NPM?**

- **Command**:

  ```bash
  npm init         # interactive
  npm init -y      # default settings
  ```

---

### 3. **What is the purpose of `package.json`?**

- **Definition**: Contains project metadata, dependency versions, and scripts.

---

### 4. **How do you install a package locally using NPM?**

- **Command**:

  ```bash
  npm install <package-name>
  ```

---

### 5. **What is the difference between `dependencies` and `devDependencies`?**

| Type            | Purpose                              |
| --------------- | ------------------------------------ |
| dependencies    | Required for runtime/production      |
| devDependencies | Needed only during development phase |

---

### 6. **What is NPX?**

- **Definition**: A CLI tool to execute Node.js packages without installing them globally.

---

### 7. **How do you update an NPM package?**

- **Command**:

  ```bash
  npm update <package-name>
  ```

---

### 8. **What is Yarn?**

- **Definition**: A fast, reliable alternative to NPM developed by Meta.

---

### 9. **How do you install Yarn?**

- **Command**:

  ```bash
  npm install -g yarn
  ```

---

### 10. **What is the equivalent of `npm install` in Yarn?**

- **Command**:

  ```bash
  yarn add <package-name>
  ```

---

### 11. **What is PNPM?**

- **Definition**: A performant package manager using content-addressable storage and hard links.

---

### 12. **How does PNPM differ from NPM/Yarn?**

- **Difference**: Uses a global content-addressable store to avoid duplication of packages.

---

### 13. **What is `package-lock.json` vs. `yarn.lock` vs. `pnpm-lock.yaml`?**

| File              | Manager | Purpose                                     |
| ----------------- | ------- | ------------------------------------------- |
| package-lock.json | NPM     | Locks dependency versions                   |
| yarn.lock         | Yarn    | Ensures consistent installs                 |
| pnpm-lock.yaml    | PNPM    | Detailed lock file for performance tracking |

---

### 14. **How do you uninstall a package in NPM/Yarn/PNPM?**

| Manager | Command               |
| ------- | --------------------- |
| NPM     | `npm uninstall <pkg>` |
| Yarn    | `yarn remove <pkg>`   |
| PNPM    | `pnpm remove <pkg>`   |

---

### 15. **What is the global install flag (`-g`) used for?**

- **Purpose**: Installs a package system-wide so it can be used from any directory.

---

## ✅ Intermediate Level (15 Questions)

---

### 1. **What are NPM scripts, and how do you run them?**

- **Definition**: Commands in `package.json` under `"scripts"`.
- **Example**:

  ```json
  "scripts": {
    "start": "node app.js"
  }
  ```

  Run with: `npm run start`

---

### 2. **How do you install a specific version of a package?**

- **Command**:

  ```bash
  npm install lodash@4.17.15
  ```

---

### 3. **What is `npx` used for besides running packages?**

- **Use Case**: Runs binaries from `node_modules/.bin` directly (e.g., `npx eslint .`).

---

### 4. **How does Yarn’s caching improve performance?**

- **Answer**: Caches downloaded packages locally so they aren’t re-downloaded.

---

### 5. **What is `yarn workspace`?**

- **Definition**: Manages multiple packages in a monorepo efficiently.

---

### 6. **How does PNPM’s hard link save disk space?**

- **Answer**: Links files from a single content-addressable store, avoiding duplicates.

---

### 7. **What is `peerDependencies` in NPM?**

- **Definition**: Declares a dependency expected to be provided by the project using your package.

---

### 8. **How do you audit dependencies for vulnerabilities?**

| Manager | Command      |
| ------- | ------------ |
| NPM     | `npm audit`  |
| Yarn    | `yarn audit` |
| PNPM    | `pnpm audit` |

---

### 9. **What is `yarn plug-n-play` (PnP)?**

- **Definition**: Avoids `node_modules`, directly resolves modules from a ZIP archive.

---

### 10. **How do you publish a package to NPM?**

- **Commands**:

  ```bash
  npm login
  npm publish
  ```

---

### 11. **What is `npm ci` vs. `npm install`?**

| Command       | Use Case                            |
| ------------- | ----------------------------------- |
| `npm install` | Normal dev install                  |
| `npm ci`      | Clean install from lockfile (CI/CD) |

---

### 12. **How do Yarn’s resolutions work?**

- **Definition**: Overrides nested dependency versions via `resolutions` in `package.json`.

---

### 13. **What is `pnpm store prune`?**

- **Definition**: Removes unused packages from PNPM global store.

---

### 14. **How do you list globally installed packages?**

| Manager | Command                 |
| ------- | ----------------------- |
| NPM     | `npm list -g --depth=0` |
| Yarn    | `yarn global list`      |
| PNPM    | `pnpm list -g`          |

---

### 15. **What is the difference between `npm exec` and `npx`?**

| Tool       | Description                                |
| ---------- | ------------------------------------------ |
| `npx`      | Executes package without installing        |
| `npm exec` | Modern alternative to `npx`, more flexible |

---

## ✅ Advanced Level (20 Questions)

---

### 1. **How does NPM’s dependency resolution algorithm work?**

- **Answer**: Resolves dependencies using semver, flattens duplicates, and hoists them.

---

### 2. **Drawbacks of NPM’s nested `node_modules`?**

- **Answer**: Deep file paths, duplication, undeclared dependencies can sneak in.

---

### 3. **How does Yarn PnP fix node_modules issues?**

- **Answer**: Eliminates `node_modules`, uses a manifest to map packages.

---

### 4. **What is PNPM’s symlink structure?**

- **Answer**: Creates symlinks to the global content store to avoid duplication.

---

### 5. **How to migrate from NPM/Yarn to PNPM?**

```bash
rm -rf node_modules package-lock.json yarn.lock
pnpm import
pnpm install
```

---

### 6. **What is `npm shrinkwrap`?**

- **Definition**: Locks down dependency versions like `package-lock.json` but is publishable.

---

### 7. **How do Yarn selective resolutions work?**

- **Answer**: Resolves version conflicts by specifying exact versions in `resolutions`.

---

### 8. **What is `overrides` in NPM?**

- **Answer**: Forces specific versions of sub-dependencies.

---

### 9. **How does PNPM handle peerDependencies?**

- **Answer**: Respects required versions and uses symlinks for minimal duplication.

---

### 10. **What is `npm pack` used for?**

- **Answer**: Creates a `.tgz` tarball of the package for local testing or publishing.

---

### 11. **How do you manage private packages?**

- **Answer**: Use `.npmrc` for private registries (e.g., GitHub, Artifactory).

---

### 12. **What is `yarn dlx`?**

- **Answer**: Like `npx`, executes a one-time dependency without adding to project.

---

### 13. **How do you optimize CI/CD with PNPM?**

```bash
pnpm fetch
pnpm install --offline
```

---

### 14. **Risks of `npm audit fix`?**

- **Answer**: May update to breaking versions; always validate after fixing.

---

### 15. **What is Yarn’s "zero-installs"?**

- **Definition**: Commits the `.yarn/cache` to Git for instant project setup.

---

### 16. **What is `pnpm patch`?**

- **Answer**: Allows modifying a dependency temporarily without forking.

---

### 17. **How to enforce a package manager team-wide?**

- **Answer**: Add `.npmrc` or use `engineStrict` in `package.json`.

---

### 18. **What is `--frozen-lockfile` used for?**

- **Answer**: Prevents lockfile changes; used to ensure deterministic builds in CI.

---

### 19. **How are optional dependencies handled?**

- **Answer**: Ignored if they fail to install. Useful for OS or platform-specific packages.

---

### 20. **Compare install speeds: NPM vs Yarn vs PNPM**

| Metric          | NPM      | Yarn   | PNPM                     |
| --------------- | -------- | ------ | ------------------------ |
| Speed           | Moderate | Fast   | Fastest (hardlink store) |
| Disk Usage      | High     | Medium | Lowest (shared store)    |
| Offline Support | Limited  | Good   | Excellent                |

---
