# Contributing to My Web Page

Thank you for your interest in contributing to this project! This document outlines the development workflow and best practices.

## Git Flow Branching Model

We follow the Git Flow branching strategy for professional development.

### Branch Structure

- **`master`** - Production-ready code only

  - Always stable and deployable
  - Tagged with version numbers (v1.0.0, v1.1.0, etc.)
  - Protected branch - requires PR review before merging

- **`develop`** - Integration branch for features

  - Always stable and deployable
  - Base branch for all feature development
  - Protected branch - requires PR review before merging

- **`feature/*`** - Feature branches

  - Created from: `develop`
  - Naming: `feature/feature-name` (e.g., `feature/navbar-redesign`)
  - Merged back to: `develop` via Pull Request

- **`bugfix/*`** - Bug fix branches

  - Created from: `develop`
  - Naming: `bugfix/bug-description` (e.g., `bugfix/mobile-responsive`)
  - Merged back to: `develop` via Pull Request

- **`hotfix/*`** - Urgent production fixes

  - Created from: `master`
  - Naming: `hotfix/issue-description` (e.g., `hotfix/security-issue`)
  - Merged to: `master` AND `develop`
  - Used only for critical production issues

- **`release/*`** - Release preparation branches
  - Created from: `develop`
  - Naming: `release/v1.0.0`
  - Final testing and minor bug fixes only
  - Merged to: `master` and `develop`

## Development Workflow

### Starting a New Feature

```bash
# Update develop branch
git checkout develop
git pull origin develop

# Create feature branch
git checkout -b feature/your-feature-name

# Make your changes
git add .
git commit -m "feat: describe your changes"

# Push to remote
git push origin feature/your-feature-name
```

### Creating a Pull Request

1. Push your branch to remote
2. Go to GitHub and create a Pull Request
3. Write a clear description of what you changed
4. Link any related issues
5. Request review from team members
6. Once approved, merge to `develop`

### Commit Message Format

Follow conventional commits:

```
type(scope): subject

body (optional)

footer (optional)
```

**Types:**

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, semicolons, etc.)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Test additions/changes
- `chore:` - Build, dependencies, tooling

**Examples:**

```bash
git commit -m "feat: add education section to portfolio"
git commit -m "fix: resolve Firebase connection timeout issue"
git commit -m "docs: update README with setup instructions"
```

## Release Process

### Creating a Release

```bash
# Create release branch from develop
git checkout -b release/v1.0.0 develop

# Make final adjustments (version bumps, changelogs)
# Test thoroughly
# Once ready:

# Merge to master
git checkout master
git pull origin master
git merge --no-ff release/v1.0.0
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin master
git push origin v1.0.0

# Merge back to develop
git checkout develop
git merge --no-ff release/v1.0.0
git push origin develop

# Delete release branch
git branch -d release/v1.0.0
git push origin --delete release/v1.0.0
```

## Handling Hotfixes

```bash
# Create hotfix from master
git checkout -b hotfix/critical-issue master

# Fix the issue and test
git commit -m "fix: resolve critical production issue"

# Merge to master
git checkout master
git merge --no-ff hotfix/critical-issue
git tag -a v1.0.1 -m "Hotfix release 1.0.1"
git push origin master
git push origin v1.0.1

# Merge back to develop
git checkout develop
git merge --no-ff hotfix/critical-issue
git push origin develop

# Delete hotfix branch
git branch -d hotfix/critical-issue
git push origin --delete hotfix/critical-issue
```

## Best Practices

1. **Keep branches up to date**

   ```bash
   git fetch origin
   git rebase origin/develop
   ```

2. **Write meaningful commit messages** - Future you and your team will thank you

3. **One feature per branch** - Keep changes focused and reviewable

4. **Test before pushing**

   ```bash
   npm start    # Run dev server
   npm run build # Test production build
   ```

5. **Keep branches short-lived** - Aim for PRs within a few days

6. **Resolve conflicts carefully** - Test after resolving

## Useful Git Aliases

Add these to your `.gitconfig`:

```bash
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual 'log --graph --oneline --all'
```

Usage: `git co feature/my-feature` instead of `git checkout feature/my-feature`

## Questions?

If you have questions about the workflow or need help, feel free to ask!

Happy coding! 🚀
