import os
import re
import yaml


def update_services_yaml(folder_path, output_file):
    services = []

    # Read the existing services.yaml file
    try:
        with open(output_file, "r") as existing_file:
            existing_services = yaml.safe_load(existing_file)
            if isinstance(existing_services, list):
                services.extend(existing_services)
    except FileNotFoundError:
        # The file doesn't exist, continue with an empty services list
        pass

    # Iterate through the directory and its subdirectories
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            # Check if the file is a README.md file
            if file.lower() == "readme.md":
                file_path = os.path.join(root, file)

                with open(file_path, "r") as file:
                    markdown_content = file.read()

                pattern = r"---\n(.*?)\n---"
                match = re.search(pattern, markdown_content, re.DOTALL)
                if match:
                    front_matter = match.group(1)
                    data = yaml.safe_load(front_matter)

                    title = data.get("card_title", "")
                    topic = data.get("topic", "")
                    price = data.get("price", "")
                    link = data.get("url", "")

                    service = {
                        "title": title,
                        "topic": topic,
                        "price": price,
                        "link": link,
                    }

                    # Check if the service already exists in the services list
                    existing_service_index = None
                    for i, existing_service in enumerate(services):
                        if existing_service.get("link") == link:
                            existing_service_index = i
                            break

                    if existing_service_index is not None:
                        # Replace all attributes of the existing service with the new service attributes
                        services[existing_service_index] = service
                    else:
                        # Append the new service to the services list
                        services.append(service)

    # Write the services list to the output YAML file
    with open(output_file, "w") as output:
        yaml.dump(services, output)

    print("Service data has been appended to the output YAML file.")


# Example usage:
folder_path = "ArsenalContent/quiver"
output_file = "data/services.yaml"
update_services_yaml(folder_path, output_file)