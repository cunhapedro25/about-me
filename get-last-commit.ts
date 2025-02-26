import { execSync } from 'child_process';
import { writeFileSync } from 'fs';

const getCommitDate = () => {
    try {
        return execSync('git log -1 --format=%cd --date=iso')
            .toString()
            .trim()
            .split(' ')[0];
    } catch (error) {
        console.error('Error getting git commit date:', error);
        return new Date().toISOString();
    }
};

const commitDate = getCommitDate();
const content = `export const LAST_COMMIT_DATE = '${commitDate}';`;

writeFileSync('./src/last-commit.ts', content);