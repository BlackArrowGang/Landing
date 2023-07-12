import os
import shutil


def copy_and_rename_banner_files(base_folder, target_folder):
    for root, dirs, files in os.walk(base_folder):
        for dir in dirs:
            media_folder = os.path.join(root, dir, "media")
            if os.path.isdir(media_folder):
                for filename in os.listdir(media_folder):
                    if filename.startswith("banner."):
                        new_filename = f"{dir}_banner{filename[6:]}"
                        source_filepath = os.path.join(media_folder, filename)
                        target_filepath = os.path.join(target_folder, new_filename)
                        shutil.copyfile(source_filepath, target_filepath)
                        print(f"Copied: {filename} to {target_filepath}")


base_folder = "./ArsenalContent/quiver"
target_folder = "./assets/img/banners"
copy_and_rename_banner_files(base_folder, target_folder)
