import os
import shutil

def rename_and_move_readme_files(source_directory_path, destination_directory_path):
    for root, dirs, files in os.walk(source_directory_path):
        for file in files:
            if file.lower() == 'readme.md':
                folder_name = os.path.basename(root)
                new_file_name = f"{folder_name}.md"
                source_file_path = os.path.join(root, file)
                destination_file_path = os.path.join(destination_directory_path, new_file_name)
                shutil.copy(source_file_path, destination_file_path)
                print(f"Moved file: {source_file_path} to {destination_file_path}")

source_directory_path = './ArsenalContent/quiver'
destination_directory_path = './content/blog'

rename_and_move_readme_files(source_directory_path, destination_directory_path)
