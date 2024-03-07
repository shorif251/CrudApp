const jwt = require('jsonwebtoken');
// pagination
const makePage = async (dataModel, limit, presentPage) => {
  const totalDocument = await dataModel.find().countDocuments();
  const totalPage = Math.ceil(totalDocument / limit);

  const pagination = {
    totalData: totalDocument,
    totalPage,
    limit,
    previousPage:
              presentPage - 1 >= 1 && presentPage - 1 < totalPage
                ? presentPage - 1
                : null,
    nextPage: presentPage >= totalPage ? null : presentPage + 1,
  };
  return pagination;
};

const tokenGenerator = (res, id, email, tokenKey) => {
  const token = jwt.sign({
    id,
    email,
  }, tokenKey, {
    expiresIn: '1d',
  });

  return token;
};

const cookieGenerator = (res, tokenName, token) => {
  res.cookie(tokenName, token, {
    httpOnly: true,
    expires: new Date(Date.now() + (1000 * 3600 * 24)),
  });
};

module.exports = {
  makePage,
  tokenGenerator,
  cookieGenerator,
};
