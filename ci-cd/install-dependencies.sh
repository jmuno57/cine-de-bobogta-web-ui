#!/bin/bash
set -eux
rm -f ~/.npmrc | true
credentials="$(curl -u "${ARTIFACTORY_READER_USER}:${ARTIFACTORY_READER_API_KEY}" 'https://bbogdigital.jfrog.io/bbogdigital/api/npm/auth')"
auth_replace="//bbogdigital.jfrog.io/bbogdigital/api/npm/npm-bbta/:_auth"
credentials=${credentials//_auth/$auth_replace}
always_auth_replace="\n//bbogdigital.jfrog.io/bbogdigital/api/npm/npm-bbta/:always-auth"
credentials=${credentials//always-auth/$always_auth_replace}
echo $credentials >> ~/.npmrc
 
npm install