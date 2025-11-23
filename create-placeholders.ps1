# Create placeholder images for the web agency site
$placeholder = "public\images\placeholder.svg"

# List of all required images
$images = @(
    "agency-workspace.jpg",
    "expertise-vitrines.jpg",
    "expertise-ecommerce.jpg",
    "expertise-saas.jpg",
    "portfolio-1.jpg",
    "portfolio-2.jpg",
    "portfolio-3.jpg",
    "portfolio-4.jpg",
    "portfolio-5.jpg",
    "portfolio-6.jpg",
    "team-group.jpg",
    "team-1.jpg",
    "team-2.jpg",
    "team-3.jpg",
    "team-4.jpg",
    "team-5.jpg",
    "team-1-hobby.jpg",
    "team-2-hobby.jpg",
    "team-3-hobby.jpg",
    "team-4-hobby.jpg",
    "team-5-hobby.jpg"
)

# Copy placeholder to all required image files
foreach ($image in $images) {
    $dest = "public\images\$image"
    if (-not (Test-Path $dest)) {
        Copy-Item $placeholder -Destination $dest
        Write-Host "Created: $image"
    } else {
        Write-Host "Already exists: $image"
    }
}

Write-Host "`nAll placeholder images created successfully!"
Write-Host "You can replace these with your own images later."
