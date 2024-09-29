/** Install in workspace by deleting top level stuff */
import shell from 'shelljs'

shell.exec('rm -rf ./.git ./.github ./.changeset ./.husky')
shell.exec(
    'rm -rf ./commitlint.config.ts ./eslint.config.js ./prettier.config.ts ./pnpm-lock.yaml',
)

//remove ignored files
shell.exec('rm -rf ./pnpm-lock.yaml ./.idea ./.history')
