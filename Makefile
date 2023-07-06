update_post: 
	python3 scripts/rename_and_move_readme_files.py


update_services:
	python3 scripts/extract_service_data.py

download_sub:
	git submodule add --force https://github.com/BlackArrowGang/Arsenal.git ArsenalContent 
