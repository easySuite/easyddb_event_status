<?php
/**
 * @file
 * easyddb_event_status.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function easyddb_event_status_field_group_info() {
  $field_groups = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_ding_event_status|node|ding_event|form';
  $field_group->group_name = 'group_ding_event_status';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'ding_event';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_ding_event_date_loc_price';
  $field_group->data = array(
    'label' => 'Event status',
    'weight' => '12',
    'children' => array(
      0 => 'field_ding_event_status_label',
      1 => 'field_ding_event_status_color',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'formatter' => 'collapsible',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-ding-event-status field-group-fieldset',
        'required_fields' => 1,
        'id' => '',
      ),
    ),
  );
  $field_groups['group_ding_event_status|node|ding_event|form'] = $field_group;

  // Translatables
  // Included for use with string extractors like potx.
  t('Event status');

  return $field_groups;
}
