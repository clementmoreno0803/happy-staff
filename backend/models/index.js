// models/index.js
const User = require('./User');
const Company = require('./Company');
const JobOffer = require('./JobOffer');
const Application = require('./Application');

// Relations
Company.hasMany(JobOffer, { foreignKey: 'company_id' });
JobOffer.belongsTo(Company, { foreignKey: 'company_id' });

User.hasMany(Application, { foreignKey: 'user_id' });
Application.belongsTo(User, { foreignKey: 'user_id' });

JobOffer.hasMany(Application, { foreignKey: 'job_id' });
Application.belongsTo(JobOffer, { foreignKey: 'job_id' });

module.exports = { User, Company, JobOffer, Application };
