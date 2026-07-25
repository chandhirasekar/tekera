Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile('public/Tek_Logo.png')
$size = [math]::Max($img.Width, $img.Height)
$bmp = New-Object System.Drawing.Bitmap $size, $size
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.Clear([System.Drawing.Color]::White)
$x = ($size - $img.Width) / 2
$y = ($size - $img.Height) / 2
$g.DrawImage($img, $x, $y, $img.Width, $img.Height)
$bmp.Save('src/app/icon.png', [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$bmp.Dispose()
$img.Dispose()
