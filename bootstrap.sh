#!/bin/bash

WD=$1

if [[ -f "$WD/.eslintrc.yaml" ]]
then
    echo -e "$WD/.eslintrc.yaml already exists. Not copying" 
else
    cp ./.eslintrc.yaml $WD
fi
    

