const fse = require('fs-extra');
const path = require('path');

exports.migrate = function (bot, base) {
    migrateConfig(bot, base);
};

function migrateConfig(bot, base) {
    let oldPath = path.resolve(base, 'config.json');
    let newPath = path.resolve(base, '../config.json');
    if (fse.existsSync(oldPath)) {
        try {
            fse.moveSync(oldPath, newPath);
        } catch (err) {
            console.error('Failed to migrate config.json!', err);
            process.exit(1);
        }
    }
}