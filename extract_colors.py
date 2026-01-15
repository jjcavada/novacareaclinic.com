
import colorgram

# Path to the logo
image_file = r'c:\Users\JJ\OneDrive\Desktop\Meriam\novacare_clinic (1)\novacare_clinic\public\assets\images\Logo-1762985073891.png'

# Extract 5 colors
try:
    colors = colorgram.extract(image_file, 5)
    print("Extracted Colors:")
    for color in colors:
        rgb = color.rgb
        hex_color = '#{:02x}{:02x}{:02x}'.format(rgb.r, rgb.g, rgb.b)
        print(f"RGB: {rgb}, Hex: {hex_color}, Proportion: {color.proportion}")
except Exception as e:
    print(f"Error: {e}")
