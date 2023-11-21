const { getUserById } = require('./yourUserModule'); // Import the function to get user by ID

async function requireUser(req, res, next) {
  const userId = req.session && req.session.userId; // Assuming userId is stored in session

  if (!userId) {
    const error = new Error('You must be logged in to access this resource');
    error.status = 401;
    return next(error);
  }

  try {
    const user = await getUserById(userId); // Fetch user details by ID from your user module
    req.user = user; // Attach user information to the request object
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = {
  requireUser
};