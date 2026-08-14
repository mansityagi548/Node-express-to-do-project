const notFound = (req , res)=>  res.status(404).send("<h1 style='color:red;'>Route does not exist<h1>")

module.exports = notFound;
