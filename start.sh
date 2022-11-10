#!/bin/bash

# If first time running project:
# git submodule update --init --recursive
sudo docker run --rm -it \
  -v $(pwd):/src \
  -p 1313:1313 \
  klakegg/hugo:0.104.3-ext-ubuntu \
  server