const packageName = "npm-local-package-template";

try {
  const { greetMe } = require(packageName);
  greetMe("Mr. Smith");
} catch (error) {
  console.log(error);

  if (error.code === "MODULE_NOT_FOUND") {
    _provideLinkingInstructions(packageName);
  }

  process.exit(1); // Exit with an error code
}

function _provideLinkingInstructions(packageName) {
  const supplementalMessage = `${packageName} may not be linked or installed into node_modules properly.
To link:
cd into package_folder:
npm link
cd into project_folder_that_uses_package:
npm link ${packageName}

To unlink:
cd into project_folder_that_uses_package:
npm unlink ${packageName}
cd into package_folder:
npm unlink
`;
  console.error(supplementalMessage);
}
