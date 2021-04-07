#!/bin/bash
if [[ $# -eq 1 ]]; then
    if [[ -d "$1" ]]; then
        pushd $1
        while true; do
            git fetch
            if [[ $(git rev-parse HEAD) != $(git rev-parse @{u}) ]]; then
                pm2 delete "serve -s build"
                git reset --hard
                git pull --rebase origin main
                npm run-script build
                pm2 start "serve -s build"    
            fi
            echo "sleeping..."
            sleep 30
        done
        popd
    else
        echo "the repository '$1' does not exists."
    fi
else
    echo "the number of parameter are incorrects."
fi