#!/bin/bash
set -eio pipefail

cd $(dirname $0)
cd ../
virtualenv env
. env/bin/activate
pip install -r community_minutes/requirements.txt
