from PIL import Image
import collections
import os

def get_dominant_colors(image_path, num_colors=10):
    if not os.path.exists(image_path):
        print(f"Error: File not found {image_path}")
        return
    img = Image.open(image_path)
    img = img.convert('RGB')
    img.thumbnail((100, 100))
    
    pixels = list(img.getdata())
    color_counts = collections.Counter(pixels)
    most_common = color_counts.most_common(num_colors)
    
    for color, count in most_common:
        hex_color = '#{:02x}{:02x}{:02x}'.format(*color)
        print(f"{hex_color}: {count}")

if __name__ == "__main__":
    # Path to the logo
    logo_path = r"f:\Web-New\my-app\public\logo.jpg"
    get_dominant_colors(logo_path)
