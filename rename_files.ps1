# Get a list of all .jsx files in the current directory
$jsxFiles = Get-ChildItem -Filter *.jsx

# Loop through the list and rename each file
foreach ($file in $jsxFiles) {
    $newName = $file.Name -replace '\.jsx$', '.js'
    Rename-Item -Path $file.FullName -NewName $newName
}
