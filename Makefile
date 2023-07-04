update_post: 
	python3 scripts/rename_and_move_readme_files.py.py


update_services:
	python3 scripts/extract_service_data.py

download_sub:
	git submodule add -b dev --force https://github.com/BlackArrowGang/Arsenal.git ArsenalContent 
