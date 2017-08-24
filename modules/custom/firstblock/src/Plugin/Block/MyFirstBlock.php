<?php

/**
 * @file
 * Contains \Drupal\firstblock\Plugin\Block\MyFirstBlock.
 */

// Пространство имён для нашего блока.
// firstblock - это наш модуль.
namespace Drupal\firstblock\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Добавляем простой блок с текстом.
 * Ниже - аннотация, она также обязательна.
 *
 * @Block(
 *   id = "simple_block_example",
 *   admin_label = @Translation("MyFirstBlock"),
 * )
 */
class MyFirstBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $block = [
      '#type' => 'markup',
      '#markup' => '<strong>Hello World!</strong>'
    ];
    return $block;
  }

}