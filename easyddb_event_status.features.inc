<?php
/**
 * @file
 * easyddb_event_status.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function easyddb_event_status_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "field_group" && $api == "field_group") {
    return array("version" => "1");
  }
}
