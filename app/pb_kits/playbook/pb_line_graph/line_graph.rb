# frozen_string_literal: true

module Playbook
  module PbLineGraph
    class LineGraph
      PROPS = %i[configured_class
                 configured_data
                 configured_title
                 configured_subtitle
                 configured_axis_title
                 configured_point_start].freeze

      def initialize(
        class_name: default_configuration,
        data: default_configuration,
        title: default_configuration,
        subtitle: default_configuration,
        axis_title: default_configuration,
        point_start: default_configuration
      )
        self.configured_class = class_name
        self.configured_title = title
        self.configured_subtitle = subtitle
        self.configured_axis_title = axis_title
        self.configured_data = data
        self.configured_point_start = point_start
      end

      def class_name
        if configured_class == default_configuration
          ""
        else
          configured_class
        end
      end

      def title
        if configured_title == default_configuration
          ""
        else
          configured_title
        end
      end

      def subtitle
        if configured_subtitle == default_configuration
          ""
        else
          configured_subtitle
        end
      end

      def axis_title
        if configured_axis_title == default_configuration
          ""
        else
          configured_axis_title
        end
      end

      def to_partial_path
        "pb_line_graph/line_graph"
      end

      def point_start
        if configured_point_start == default_configuration
          "2012"
        else
          configured_point_start
        end
      end

      def data
        if configured_data == default_configuration
          data = [{
            name: "Installation",
            data: [43_934, 52_503, 57_177, 69_658, 97_031, 119_931, 137_133, 154_175],
          }]
          data.to_json.html_safe
        else
          configured_data.to_json.html_safe
        end
      end

    private

      DEFAULT = Object.new
      private_constant :DEFAULT
      def default_configuration
        DEFAULT
      end
      attr_accessor(*PROPS)
    end
  end
end