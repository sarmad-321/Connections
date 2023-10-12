export function calculateAge(dateOfBirth) {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

export const getFileExtension = filePath => {
  // Split the file path by "/" to get the filename
  const pathParts = filePath.split('/');
  const filename = pathParts[pathParts.length - 1];

  // Split the filename by "." to get the file extension
  const filenameParts = filename.split('.');
  const fileExtension = filenameParts[filenameParts.length - 1];
  return fileExtension;
};
